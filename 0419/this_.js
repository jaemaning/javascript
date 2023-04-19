const obj = {
  numbers : [1,2],
  myfunc : function() {
    console.log(this)
    const in_my_function = () => {
      console.log(this)
    }
    in_my_function()
  }
}

obj.myfunc()