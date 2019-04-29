let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500
console.log(user +10)

