import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

function useComponent(componentName) {
  const [component, setComponent] = useState({});

  useEffect(() => {
    const getComponent = async () => {
      const req = await fetch(`http://localhost:3999/components/${componentName}`);
      const data = await req.json();

      setComponent(data);
    };

    getComponent();
  }, []);

  return { component };
}

export default useComponent;
