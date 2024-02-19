import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import useResize from "./useResize";

function App() {
  const resizeHooks = Array.from({ length: 5 }, () => useResize());
  const refs = Array.from({ length: 5 }, () => useRef());

  resizeHooks.forEach((resizeHook, index) => {
    const panel = refs[index].current;
    if (panel) {
      panel.resize(resizeHook);
    }
  });

  return (
    <>
      <div className="layout">
        {/*         <PanelGroup autoSaveId="test" direction="horizontal">
          <Panel className="panels" defaultSize={25} minSize={20}>
            Right Panel
          </Panel>
          <PanelResizeHandle className="handle">
            <img className="handleLogo" src="/log.png" alt="LogRocket Logo" />
          </PanelResizeHandle>
          <Panel className="panels" minSize={20}>
            Left Panel
          </Panel>
        </PanelGroup> */}

        <PanelGroup direction="horizontal">
          <Panel ref={refs[0]} className="panels" minSize={20}>
            left
          </Panel>
          <PanelResizeHandle className="handle" />
          <Panel minSize={40}>
            <PanelGroup direction="vertical">
              <Panel ref={refs[1]} className="panels" minSize={20}>
                top
              </Panel>
              <PanelResizeHandle className="handle" />
              <Panel minSize={20}>
                <PanelGroup direction="horizontal">
                  <Panel ref={refs[2]} className="panels" minSize={20}>
                    left
                  </Panel>
                  <PanelResizeHandle className="handle" />
                  <Panel ref={refs[3]} className="panels" minSize={20}>
                    right
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="handle" />
          <Panel ref={refs[5]} className="panels" minSize={20}>
            right
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
