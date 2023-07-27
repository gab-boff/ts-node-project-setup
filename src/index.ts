import Tree from "@/tree/tree";

class Person {
  sayMyName() {
    return "Gabriel";
  }
}

const tree = new Tree();

console.log(tree.log());

export default Person;
