describe('greeting' , function(){
    it('should greet a person in isiXhosa' , function(){
        var greetInIsiXhosa = Greeting();
        assert.deepEqual(greetInIsiXhosa.language("Sesethu", "isiXhosa"), "Molo Sesethu");

      });
    it('should greet a person in English' , function(){
        var greetInEng = Greeting()
        assert.deepEqual(greetInEng.language("Daniel", "English"), "Hello Daniel");

      });
      it('should greet a person in Afrikaans' , function(){
        var greetInAfr = Greeting()
        assert.deepEqual(greetInAfr.language("Sam", "Afrikaans"), "Hallo Sam");

      });
      it('should be able to keep track of a name greeted' , function(){
        var greet = Greeting()
        assert.equal(greet.getName('Inga'),greet.getName());

      });
      it('should increment the counter when a new name is greeted' , function(){
        var count = Greeting()
        assert.equal(count.counter("Sipho"), count.counter());

      });
      
});