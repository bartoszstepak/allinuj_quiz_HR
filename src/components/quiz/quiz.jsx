import React from 'react'
import { Button } from 'react-bootstrap';
import './quiz.css'

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isQuizStarted: false,
            currentQuestionIndex: 0,
            currentQuestion: "",
            questions: [
                "Pyanie jeden",
                "Pytanie drugie asdasd asd asdasdasd?"
            ]
        }
    }


    onClickStartEndQuizBtn() {
        this.setState({
            isQuizStarted: !this.state.isQuizStarted
        });
    }

    onClickNextBtn() {

    }


    getNextQuestion() {

    }

    getQuestion(index) {
    }





    render() {
        return (
            <div class="vertical-center">
            <div class="container">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        {this.state.isQuizStarted ?
                            <div className="d-flex justify-content-center">
                                <button type="button" class="btn btn-primary" onClick={() => this.onClickStartEndQuizBtn()}>Zakończ Quiz</button>
                                <button type="button" class="btn btn-primary">Następne Pytanie</button>
                            </div>
                            :
                            <div className="d-flex justify-content-center">
                                <button type="button" class="btn btn-primary" onClick={() => this.onClickStartEndQuizBtn()}>Rozpocznij Quiz</button>
                            </div>
                        }                
                        </div>
                </div>
            </div>
            </div>

        )
    }
}