import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* BASIC PROPS */}
      <Greet name="German" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* ADVANCED PROPS */}
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo di Caprio!</Heading>
      </Oscar>
      {/* EVENT PROPS */}
      <Button handleClick={(e, id) => console.log("button clicked", e, id)} />
      {/* Destructuring props */}
      <Input value="" handleChange={(e) => console.log(e)} />
      {/* STYLE PROPS */}
      <Container styles={{ border: "2px solid blue", padding: "1rem" }} />
      {/* CONTEXT */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* useContext with future value */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
      {/* CLASS COMPONENT */}
      <Counter message="The count value is" />
      {/* COMPONENT PROP */}
      <Private isLoggedIn={true} component={Profile} />
      {/* GENERIC PROPS */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* RESTRICTING PROPS */}
      <RandomNumber value={10} isPositive />
      {/* TEMPLATE LITERALS */}
      <Toast position="center" />
      {/* WRAPPING HTML ELEMENTS */}
      <CustomButton variant="primary" onClick={() => console.log("Clicked!")}>
        Primary button
      </CustomButton>
      {/* POLYMORPHIC COMPONENTS */}
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
