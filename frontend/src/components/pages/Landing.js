import Page from "../shared/Page";
import Heading from "../shared/Heading";
import TopNav from "../shared/TopNav";
import useComponent from "../../hooks/useComponent";

const components = {
  Heading,
  TopNav,
};

function Landing() {
  const { component } = useComponent("LandingPage");

  if (!component.children) {
    return <div>Loading component...</div>;
  }

  return (
    <Page>
      {component.children.map((child) => {
        const C = components[child.component];

        return (
          <C {...child.props}>
            {child.children.map((c) => {
              const SubComponent = components[c.component];

              return <SubComponent {...c.props} />;
            })}
          </C>
        );
      })}
    </Page>
  );
}

export default Landing;
