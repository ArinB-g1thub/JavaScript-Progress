for (let i = 0; i <= 5; i++) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern += "*"
    }
    console.log(pattern)
}

/*
for (let i = 1; i <= 5; i++) {
    console.log(`--- Iteration ${i} ---`);
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        console.log(`  Adding star ${j}`);
        pattern += "*"
    }
    console.log(`Pattern: ${pattern}`);
    console.log(pattern)
} */