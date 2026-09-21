function countWordFrequencies(sentence) {
    let frequency = {};
    const words = sentence.toLowerCase().split(/[^a-zA-Z]+/).filter(Boolean);
    console.log(words); //[ 'hello', 'world', 'hello' ]
    

    for(let word of words){
        if(frequency[word]){
            frequency[word]++;
        }else{
            frequency[word]=1
        }
    }
    
    return frequency;
}

console.log(countWordFrequencies("Hello world, hello!"));
console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."));

