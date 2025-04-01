import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const projectLinks = document.querySelectorAll(".project a");
        projectLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                link.style.transform = "scale(1.1)";
                link.style.transition = "0.3s";
            });
            link.addEventListener("mouseout", () => {
                link.style.transform = "scale(1)";
            });
        });
    }, []);

    return (
        <div className="App">
            <header>
                <h1>성현욱</h1>
                <p>웹 프론트엔드 개발자</p>
            </header>
            <section id="about">
                <h2>소개</h2>
                <p>안녕하세요! 저는 웹 프론트엔드 개발을 꿈꾸고 있는 성현욱입니다.</p>
            </section>
            <section id="career">
                <h2>경력</h2>
                <ul>
                    <li>진해중앙초등학교 졸업</li>
                    <li>진해남중학교 동아리 'Code' 회장</li>
                    <li>경성대학교 소프트웨어학과 부학회장</li>
                </ul>
            </section>
            <section id="projects">
                <h2>프로젝트</h2>
                <div className="project">
                    <p>지뢰찾기 게임</p>
                    <a href="https://02-wooki.github.io/mineSweeper/" target="_blank" rel="noopener noreferrer">플레이하기</a>
                </div>
            </section>
            <section id="contact">
                <h2>연락처</h2>
                <p>Email: <a href="mailto:hyunwook02@icloud.com">hyunwook02@icloud.com</a></p>
                <p>GitHub: <a href="https://github.com/02-wooki" target="_blank" rel="noopener noreferrer">02-wooki</a></p>
            </section>
        </div>
    );
}

export default App;
