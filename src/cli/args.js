const parseArgs = () => {
    const args = process.argv.slice(2);
    let results = {};

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const propValue = args[i + 1];
        results[propName] = propValue;
    }

    for (const propName in results) {
        console.log(`${propName} is ${results[propName]}`);
    }

};

parseArgs();


