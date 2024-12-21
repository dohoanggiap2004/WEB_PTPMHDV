const natural = require('natural');

const calculateTFIDF = (documents) => {
    const tfidf = new natural.TfIdf();
    documents.forEach(doc => tfidf.addDocument(doc));

    return documents.map((doc, index) => tfidf.listTerms(index));
};

module.exports = { calculateTFIDF };
