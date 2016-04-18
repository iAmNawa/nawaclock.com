var quotes = [
  "'If you're not first, you're last' -Ricky Bobby",
  "'Nothing Satisfies' -Bent Cardan",
  "'Pretty good' -Larry David",
  "'See you tomorrow' -Wils Cardan",
  "'I am Nawa!' -Paul Borawski",
  "'Sometimes life hits you in the head with a brick. Don't lose faith.' -Steve Jobs",
  "'The only limit to our realization of tomorrow will be our doubts of today.' -Franklin D. Roosevelt",
  "'What would life be if we had no courage to attempt anything?' -Vincent Van Gogh",
  "'By failing to prepare, you are preparing to fail.' -Benjamin Franklin",
  "'Spring is nature's way of saying, 'Let's party!' -Robin Williams",
  "'Genius is patience.' -Isaac Newton"
]

function printQuote() {
  document
    .getElementById("emptyone")
    .innerHTML = quotes[Math.floor(Math.random() * 11)];
}
