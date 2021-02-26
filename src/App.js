import logo from './logo.svg';
import './App.css';

const features = [
    {
        img: '/images/icon1.png',
        title: 'Declarative',
        text: 'React makes it painless to create interactive UIs.'
    },
    {
        img: '/images/icon2.png',
        title: 'Components',
        text: 'Build encapsulated components that manage their state.'
    },
    {
        img: '/images/icon3.png',
        title: 'Single-Way',
        text: "A set of inmmutable values are passed to the component's."
    },
    {
        img: '/images/icon4.png',
        title: 'JSX',
        text: 'Statically-typed. designed to run on modern browsers.'
    }
];

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="container">
                    <nav className="container d-flex justify-content-between pt-3 pb-3">
                        <img src="/images/ironhack-logo.svg" alt="ironhack-logo" />
                        <img src="/images/menu-top.svg" alt="menu-tool" />
                    </nav>
                    <header className="App-header d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-6 text-start">
                                <h1 className="mb-3">Say hello to ReactJS</h1>
                                <p className="mb-5">You will learn how to use<br />the most popular frontend library,<br />and become a super Ninja developer.</p>
                                <button className="btn btn-light ps-4 pe-4 pt-3 pb-3 mt-3">Awesome!</button>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src="/images/react-logo.svg" alt="" />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <section className="container d-flex justify-content-center align-items-center">
                <div className="row ps-5 pe-5">
                    {features.map((feat, i) => (
                        <div className="col-3 feat">
                            <img src={feat.img} alt={feat.title} />
                            <h2>{feat.title}</h2>
                            <p>{feat.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
