const Data = [
    "typing", "apps", "cater", "all", "levels", "from", "beginners", "experts", "they", "provide",
    "structured", "way",
    "improve",
    "your", "skills", "speed", "and", "accuracy", "are",
    "vital", "in", "todays", "digital", "world", "sharpen", "with", "these",
    "exercises", "a", "watch", "productivity", "soar", "accurately", "at", "rapid",
    "pace", "is", "the", "goal", "of", "they", "foster",
    "muscle", "memory", "finger", "dexterity", "practice", "diligently",
    "reap", "the", "rewards", "faster", "start", "with", "simple", "sentences", "gradually",
    "advance", "more", "complex", "paragraphs", "become", "virtuoso", "tests",
    "are", "a", "quick", "way", "evaluate", "with", "no", "punctuation", "inside", "these",
    "paragraphs", "challenge", "precision", "practicing", "regularly", "sharpens",
    "prowess", "compete", "with", "yourself", "others", "track", "progress", "strive",
    "for", "higher", "words", "per", "minute", "proficiency", "unlocks", "opportunities", "in", "various", "fields",
    "data", "entry", "content", "creation", "communication", "benefit", "enhanced", "skills", "speed",
    "apps", "help", "you", "learn", "practice",
    "at", "your", "own", "pace", "achieving", "higher", "words", "per",
    "minute", "is", "a", "testament", "to", "dedication", "hard", "work", "is",
    "an", "essential", "skill", "the", "digital", "age", "whether", "youre", "accuracy", "a",
    "offer", "student", "professional", "or", "casual", "user", "improved", "lessons", "speed",
    "exercises", "consistency", "and", "is", "the", "key", "becoming", "benefit", "everyone", "apps",
    "proficient", "structured", "fun", "practice", "typist"
];

export const randomWords = (size = 50) => {
    let ansArray = [];
    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * Data.length);
        ansArray.push(Data[index]);
    }
    return ansArray;
}
