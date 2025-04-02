import React from "react";

const TestPage: React.FC = () => {
  return (
    <>
      <style>
        {`
          .testPage-container {
            display: flex;
            flex-direction: column;
            width: 100vw;
           
            background-color: #f5f5f5;
            justify-content: center;
            align-items: center;
           
          }

          .testPage-header {
            width: 100%;
            padding: 20px;
            background-color: #007bff;
            color: white;
            text-align: center;
           
          }

          .testPage-main {
            flex-grow: 1;
            width: 100%;
            background-color: pink;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100vh;
            box-sizing: border-box;
            
            background-color: #ffffff;
            
            
          }
            .testPage-content
            {
            width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
            height: 100vh;
            
            background-color: green;
            
            }
            .testPage-content img {
            
            position: absolute;
            width:100%;
            height:100%;
            object-fit: cover;
        }

          .testPage-footer {
            width: 100%;
            background-color: #007bff;
            height: 200px;
            color: white;
            
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            
          }
        `}
      </style>

      <div className="testPage-container">
        <header className="testPage-header">
          <h1>Test Page</h1>
        </header>
        <main className="testPage-main">
          <p>
            Witaj na stronie testowej. Zawartość strony może być dynamicznie
            dostosowana.
          </p>
        </main>
        <section className="testPage-content">
          <h2>Dynamiczna zawartość</h2>
          <p>
            Ta sekcja może być używana do wyświetlania dynamicznej zawartości,
            takiej jak dane z API lub komponenty React.
          </p>
        </section>
        <section className="testPage-content">
          <img src="https://images.unsplash.com/photo-1742228896964-83f6327740ea?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </section>
        <footer className="testPage-footer">
          <p>© 2025 Test Page. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </>
  );
};

export default TestPage;
