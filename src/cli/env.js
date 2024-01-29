process.env.RSS_var1 = 'value1';
process.env.RSS_var2 = 'value2';
process.env.other_var = 'other_value';

const parseEnv = () => {
    const results = {};
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            results[key] = value;
        }
    }
    return console.log(JSON.stringify(results, null, 2));
};

parseEnv();
