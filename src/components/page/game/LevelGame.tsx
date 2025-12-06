import React, { useEffect } from 'react';
import { useGame, useSetUserInput, useUpdateGame } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';
import type { IGameLevel, IQuestion } from '../../../intrfaces/game.interface';
import useTimer from '../../../hooks/useTimer';
import calculateScore from '../../../logic/calculate-score';
import { useSetting } from '../../../stores/setting.store';
import Card from '../../Card';
import DisplayHearts from './DisplayHearts';


const LevelGame = () => {

    const setting = useSetting();
    const updateGame = useUpdateGame();
    const { seconds, restartTimer, finshed } = useTimer();
    const { currentLevel, gameScore, gameActiveState, hearts, highestStreak, inputRef } = useGame();
    const setUserInput = useSetUserInput();
    const { questions, currentQuestionIndex, level, levelStreak, levelScore } = currentLevel;
    const numbersOfQuestions = questions.length;

    useEffect(() => {

        if (gameActiveState === GameActiveState.active && currentQuestionIndex < questions.length) {

            if (inputRef.current !== null) {
                inputRef.current.focus();
            }
            restartTimer();
        }

    }, [currentQuestionIndex]);

    useEffect(() => {

        console.log('finshed changed: ', finshed);
        if (seconds === 0 && gameActiveState === GameActiveState.active) {
            handleSubmit();
        }
    }, [seconds]);

    if (questions.length === 0 || currentQuestionIndex === -1 || currentQuestionIndex >= questions.length) {
        return null;
    }

    if (gameActiveState !== GameActiveState.active) {
        return null;
    }

    const { question, userAnswer, answer } = questions[currentLevel.currentQuestionIndex];

    const classesClock = seconds < 10 ? 'bg-red-50 border-red-500 text-red-600 font-bold ' : ' bg-white';

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('key has pressed');
        if (event.key === 'Enter') {

            handleSubmit();
        }
    };

    return (
        <div className='p-2 mb-5'>
            <div className='flex justify-between gap-2'>
                <div className='w-1/3'>
                    <Card>
                        <DisplayHearts />
                        <div className='text-2xl'>
                            Level: {level}
                        </div>
                        <div className='text-2xl'>
                            Score: {levelScore}
                        </div>
                    </Card>
                </div>

                <div className='flex flex-col text-center align-center w-1/3'>
                    <Card>
                        <div className={'w-25 h-12 border-2 rounded-md border-black mx-auto my-2 flex justify-center items-center text-4xl font-mono ' + classesClock}>
                            {seconds}
                        </div>
                        <div className='text-5xl'>
                            {question} = ?
                        </div>
                    </Card>
                </div>


                <div className='w-1/3'>
                    <Card>
                        <div className='text-2xl'>
                            Question {currentQuestionIndex + 1} / {numbersOfQuestions}
                        </div>
                        <div className='text-2xl mb-2'>
                            Streak: {levelStreak}
                        </div>
                    </Card>
                </div>
            </div>

            <div className='flex justify-center items-center p-2 flex-start mt-10'>
                <div className='flex gap-2 h-10 text-3xl'>
                    <input
                        className='bg-gray-100 py-1 px-2 border-1 text-3xl focus:bg-blue-50 border-bg-gray-200 rounded w-62 h-15'
                        type='string'
                        value={userAnswer}
                        onChange={setUserInput}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                    <button
                        type='button'
                        className='bg-gray-100 hover:bg-blue-50 py-1 px-2 border-1 h-15
                        border-bg-gray-200 rounded hover:cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 '
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );


    function handleSubmit() {

        let gameActiveState: GameActiveState = GameActiveState.active;
        const userAnswerInt = Number(userAnswer);
        const newQuestionIndex = currentQuestionIndex + 1;
        const isSuccess = userAnswerInt === answer;
        const newHearts = isSuccess ? hearts : hearts - 1;

        const newLevelStreak = isSuccess ? currentLevel.levelStreak + 1 : 0;
        const gameFialure = newHearts <= 0;
        const newQuestions: IQuestion[] = [...questions];
        const newScore = isSuccess ? levelScore + calculateScore(setting, newLevelStreak, seconds) : levelScore;
        const newHighestStreak = highestStreak < newLevelStreak ? newLevelStreak : currentLevel.levelStreak;


        newQuestions[currentQuestionIndex] = {
            ...newQuestions[currentQuestionIndex],
            userAnswer: userAnswer,
        };

        const newGameLevel: IGameLevel = {
            ...currentLevel,
            currentQuestionIndex: newQuestionIndex,
            levelStreak: newLevelStreak,
            questions: [...newQuestions],
            levelScore: newScore
        }


        if (gameFialure) {
            gameActiveState = GameActiveState.finshed;
        }
        else if (newQuestionIndex >= questions.length) {
            gameActiveState = GameActiveState.betweenLevels;
        }

        const newGame = {
            gameScore: gameActiveState === GameActiveState.active ? gameScore : gameScore + newScore,
            hearts: newHearts,
            highestStreak: newHighestStreak,
            gameActiveState: gameActiveState,
            currentLevel: { ...newGameLevel },
            inputRef: inputRef,

        }

        console.log('newGame: ', newGame);

        updateGame(newGame);
    }

}

export default LevelGame;