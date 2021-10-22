
describe('calculate rates tests', () => {

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount : 500000,
      years : 30,
      rate : 5
    }
    expect(calculateMonthlyPayment(values)).toEqual('2684.11');
    expect(calculateMonthlyPayment(values)).toBe('2684.11');
    expect(1+1).toEqual(2);
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount : 120000,
      years : 30,
      rate : 7.875
    }
    expect(calculateMonthlyPayment(values)).toBe('870.08');
  });

  it('should handle very high tax rate', () => {
    const values = {
      amount : 500000,
      years : 30,
      rate : 85
    }
    expect(calculateMonthlyPayment(values)).toEqual('35416.67');
  })

  it('should handle low figures -- amount/rate/years', () => {
    const values = {
      amount : 1500,
      years : 2,
      rate : 1.75
    }
    expect(calculateMonthlyPayment(values)).toEqual('63.65');
  })

  it('should handle invalid entries', () => {
    const values = {
      amount : 1500,
      years : 2,
      rate : 1.75
    }

    expect(calculateMonthlyPayment(values)).toThrowError();
  })
  
})

describe('Invalid entries tests', () => {

it('should throw error if entry is NaN, string, boolean, etc.', () => {
  expect(update()) 
})

})


return {
  amount: +document.getElementById("loan-amount").value,
  years: +document.getElementById("loan-years").value,
  rate: +document.getElementById("loan-rate").value
}