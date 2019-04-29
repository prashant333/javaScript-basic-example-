let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 1, name: "saurabh"}
  ];
  x= users.filter(item=> item.id==1)
  console.log(x.find(item=>item.id==1).id)
  