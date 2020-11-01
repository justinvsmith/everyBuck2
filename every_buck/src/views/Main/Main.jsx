import React from "react";
import './Main.css';
import Budgets from '../../components/Budgets/Budgets';
import Summaries from '../../components/Summaries/Summaries';
import Header from '../../components/Header/Header';

export default function Main() {
    return (
        <div className="main">
            <Budgets />
            <Summaries />
        </div>
    )
}