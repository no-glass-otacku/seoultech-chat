// Email generation logic based on user situation
function generateEmailTemplate({ professor, course, situation }) {
  return `
안녕하세요 ${professor} 교수님,

${course} 수업 관련하여 다음과 같은 상황이 발생하여 문의드립니다:

${situation}

관련 규정에 따라 재시험이 가능한지 검토 부탁드리며,
가능하시다면 절차를 안내해주시면 감사하겠습니다.

감사합니다.
  `.trim();
}

module.exports = { generateEmailTemplate };
