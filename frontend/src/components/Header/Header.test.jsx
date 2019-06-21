
function suma(num1,num2,random) {
    const result=num1+num2*random;
    return result;
}
it('should sum two numbers and return the sum value',()=>{
    const random=Math.random()
    expect(suma(1,2,random)).toBe(1+2*random)
})