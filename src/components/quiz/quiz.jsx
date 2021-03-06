import React from 'react'
import { Button } from 'react-bootstrap';
import './quiz.css'

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            previousQuestionsUsageInfo: [],
            isQuizStarted: false,
            currentQuestionIndex: 0,
            currentQuestion: "",
            counter: 0,
            questions: [
                "Ile razy musi zadzwonić telefon, zanim podniesiesz słuchawkę?",
                "Jaki masz dźwięk budzika w telefonie?",
                "Czego najbardziej się boisz?",
                "Obchodzi cię Twój wygląd czy masz na to totalnie wywalone?",
                "Czy kiedykolwiek chciałaś/eś być kimś innym?",
                "Gdybyś mógł/mogła cofnąć się w czasie i coś zmienić w swoim życiu lub ogółem w świecie to co by to było?",
                "Jakie jest twoje największe marzenie?",
                "Jaka jest 1 rzecz, której nie zrobiłeś/aś w przeszłości i tego żałujesz?",
                "Jaka 1 postać z przeszłości chciałbyś poznać osobiście i móc z nią porozmawiać?",
                "Jaki jest Twój ulubiony moment w ciągu swojego standardowego tygodnia?",
                "Gdybyś napisał/a książkę o sobie jaki miałaby tytuł?",
                "Załóżmy, że istnieje reinkarnacja – jak myślisz kim mógłbyś/mogłabyś być w innym życiu?",
                "Mógłbyś/mogłabyś opisać siebie w trzech słowach? Żeby było trudniej - dwie super rzeczy, jedna mniej (może jakaś wada)?",
                "Ulubiona postać z Disneya?",
                "Gdybyś mógł/mogła zadać jedno pytanie o Twoją przyszłość i uzyskać pewną odpowiedź, czego by ono dotyczyło?",
                "Kim chciałeś/aś zostać w dzieciństwie?",
                "Jaka jest Twoja pierwsza myśl po przebudzeniu?",
                "Jaką magiczną moc chciałabyś/chciałbyś posiadać?",
                "Ważny dla ciebie cytat/powiedzenie brzmi…",
                "Twoja opinia na temat Izabeli Łęckiej",
                "Gdybyś był/a niewidzialny/na przez jeden dzień co byś zrobił/a?",
                "Jaka jest twoja ulubiona planszówka?",
                "Która część Harry'ego Pottera jest Twoją ulubioną?",
                "Maryla Rodowicz czy Beata Kozidrak?",
                "Jaki majonez jest najlepszy?",
                "Ketchup pikantny czy łagodny?",
                "Jaki sos do hot doga?",
                "Co bardzo byś chciał sobie kupić, ale zawsze szkoda Ci pieniędzy?",
                "Czy pizza z ananasem powinna zostać zdelegalizowana?",
                "Jaką najdziwniejszą rzecz widziałeś ostatnio na YouTubie?",
                "Jak nazywała się twoja grupa w przedszkolu?",
                "Jaką piosenkę bardzo lubisz, ale trochę się tego wstydzisz?",
                "Jaki film/serial bardzo lubisz, ale trochę się tego wstydzisz?",
                "Twój pierwszy crush w dzieciństwie" ,
                "W jakiej postaci lubisz najbardziej ziemniaki?",
                "W którym filmie Robert Pattinson jest najbardziej hot?",
                 "Gdybyś mógł/mogła wziąć udział w jakimś reality show to w jakim?",
                "Gdybyś miał/a przez rok mieszkać ze jakąś znaną osobą to z kim?",
                "Który rok był twoim ulubionym?",
                "Jaką bajkę z dzieciństwa nadal chętnie oglądasz/obejrzałbyś?",
                "Jaki jest twój ulubiony mem/gif?",
                "Czy kiedykolwiek ukradłeś/aś znak drogowy? Albo czy masz jakiś przypał imprezowy?" ,
                "Za co przebierałeś/aś się na bale w przedszkolu?",
                "Ulubiona piosenka z HSM?",
                "Ryan Gosling czy Robert Pattinson?",
                "Powiedz, co myślisz o sobie, jak się oceniasz, jakie jest Twoje zdanie o Tobie samym i jak to się ma do tego, jak widzą Cię inni.",

            ]
        }
    }

    componentDidMount() {
        var previousQuestionsUsageInfo = [];
        for (var i = 0; i < this.state.questions.length; i++) {
            previousQuestionsUsageInfo.push(false);
        }
        this.setState({
            previousQuestionsUsageInfo: previousQuestionsUsageInfo
        })    
    }

   
    getRandomIndexNumer() {
        var max = this.state.questions.length;
        var rand = Math.floor(Math.random() * max);
        const maxIntrationCount = 100;
        var currentIteration = 0;
        
        while(rand === this.state.currentQuestionIndex || currentIteration > maxIntrationCount) {
            rand = Math.floor(Math.random() * max);
            currentIteration++;
        }
        
        return rand >=0 && rand <= max ? rand :  this.getRandomIndexNumer();
    }


    onClickStartQuizBtn() {
        this.getNextQuestion();
        this.setState({
            isQuizStarted: true
        });
        
    }

    onClickEndQuizBtn() {
        this.setState({
            isQuizStarted: false
        });
    }

    onClickNextBtn(e) {
        this.getNextQuestion(); 
    }

    getNextQuestion() {
        if(this.isQuizFinished()) {
            this.finishQuiz();
        }

        var questionIdex = this.getRandomIndexNumer();
        
        while(this.isQuestionUsed(questionIdex)) {
            questionIdex = this.getRandomIndexNumer();
        }
        
        var previousQuestionsUsageInfo = this.state.previousQuestionsUsageInfo;
        previousQuestionsUsageInfo[questionIdex] = true;

        this.setState({
            currentQuestionIndex: questionIdex,
            currentQuestion: this.state.questions[questionIdex],
            previousQuestionsUsageInfo: previousQuestionsUsageInfo,
            counter: this.state.counter+1
        });
    }

    isQuizFinished() {
        return this.state.counter === this.state.questions.length;
    }

    finishQuiz() {
        window.confirm("Koniec pytań - Kliknij OK aby zakończyć i rozpocząć od nowa");
        this.resetQuestionUsageInfo()
        this.setState({
            counter: 0,
            isQuizStarted: false,
            currentQuestion: "",
            currentQuestionIndex: 0
        })
    }

    resetQuestionUsageInfo() {
        var previousQuestionsUsageInfo = this.state.previousQuestionsUsageInfo;
        for (var i = 0; i < this.state.questions.length; i++) {
            previousQuestionsUsageInfo[i] = false;
        }
        this.setState({
            previousQuestionsUsageInfo: previousQuestionsUsageInfo
        })
    }

    isQuestionUsed(index){
        return this.state.previousQuestionsUsageInfo[index];
    }

    render() {
        return (
            <div class="vertical-center">
                <div class="container">
                    <div class="card text-center">

                        {this.state.isQuizStarted ?
                            <div class="card-body">
                                <h2 class="card-title">Twoje Pytanie</h2>
                                <h1 class="card-text">{this.state.currentQuestion}</h1>
                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-dark" onClick={() => this.onClickEndQuizBtn()}>Zakończ Quiz</button>
                                    <button type="button" class="btn btn-info" onClick={(e) => this.onClickNextBtn(e)}>Następne Pytanie</button>
                                </div>
                            </div>

                            :
                            <div class="card-body">
                                <h1 class="card-text">Witamy w maszynie losującej ALL IN UJ</h1>
                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-info" onClick={() => this.onClickStartQuizBtn()}>Rozpocznij Quiz</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        )
    }
}