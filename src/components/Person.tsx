import { PersonProps } from "./Person.types";
// Move type into another file and export/import it
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
