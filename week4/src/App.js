import React from "react";
import "./App.css";
import NotificationList from "./NotificationList"; // ✅ NotificationList 추가

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>알림 리스트</h1>
                <NotificationList /> {/* ✅ 알림 리스트 렌더링 */}
            </header>
        </div>
    );
}

export default App;
