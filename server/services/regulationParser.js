// Regulation parser logic will go here
// server/services/regulationParser.js

function extractClauseInfo(text) {
  const result = {
    article: null,
    clause: null,
    raw: null,
    source: null,
  };

  const clauseRegex = /(제\s?(\d+)\s?조)(\s?제\s?(\d+)\s?항)?/;
  const sourceRegex = /출처[:：]?\s*(.+)/;

  const clauseMatch = text.match(clauseRegex);
  if (clauseMatch) {
    result.raw = clauseMatch[0].trim();
    result.article = parseInt(clauseMatch[2]);
    if (clauseMatch[4]) {
      result.clause = parseInt(clauseMatch[4]);
    }
  }

  const sourceMatch = text.match(sourceRegex);
  if (sourceMatch) {
    result.source = sourceMatch[1].trim();
  }

  return result;
}

module.exports = { extractClauseInfo };
