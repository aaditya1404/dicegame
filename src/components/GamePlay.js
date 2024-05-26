"use client";
import Image from "next/image";
import { useState } from "react";

export default function GamePlay() {

    const numbers = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [selectedDice, setSelectedDice] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [rules, setRules] = useState(false);

    // let sum = 0;
    function RollDice(min, max) {
        const dice = parseInt(Math.random() * (max - min) + min);
        setSelectedDice(dice);
        if (selectedNumber === selectedDice) {
            // sum = sum + selectedNumber;
            setTotalScore(prev => prev + selectedNumber);
        }
        else {
            setTotalScore(prev => prev - selectedDice);
        }
    }

    return (
        <div>
            <div className="flex my-12 items-center justify-around flex-wrap">
                <div className="flex flex-col items-center">
                    <div className="text-6xl font-bold mb-2">
                        {totalScore}
                    </div>
                    <p className="text-sm font-semibold">Total Score</p>
                </div>
                <div>
                    <div className="flex gap-4 mb-2">
                        {
                            numbers?.map((number) => (
                                <div
                                    key={number}
                                    className="text-xl font-bold border border-black px-4 py-2 cursor-pointer transition duration-200 hover:bg-black hover:text-white"
                                    onClick={() => setSelectedNumber(number)}
                                >
                                    {number}
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-sm font-bold flex justify-end">Selected Number: {selectedNumber}</p>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <Image
                    src={`/dices/dice_${selectedDice}.png`}
                    width={180}
                    height={180}
                    alt="dice image"
                />
                <div className="flex flex-col">
                    <button
                        onClick={() => RollDice(1, 7)}
                        className="font-semibold"
                    >
                        Click on Dice to roll
                    </button>
                    <button
                        onClick={() => setTotalScore(0)}
                        className="text-xs border border-black font-semibold text-black py-1 mt-5"
                    >
                        Reset Score
                    </button>
                    <button
                        onClick={() => setRules(!rules)}
                        className="text-xs border border-black bg-black font-semibold text-white py-1 mt-3"
                    >
                        Show Rules
                    </button>
                </div>
                <div>
                    {
                        rules && (
                            <div className="bg-red-100 mt-4 rounded">
                                <p className="px-4 py-2 font-bold">How to play Dice Game</p>
                                <p className="px-4 text-sm">Select any number <br /> Click on Dice to roll <br/> If selected number is equal to the dice number<br /> you would get a positive score of a selected number<br /> otherwise the score would be deducted by the number on the dice.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}