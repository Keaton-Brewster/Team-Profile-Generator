// THIS IS THE TEMPLATE FILE FOR THE CREATING OF MAIN.CSS
const css = `p,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: white !important;
}
:root {
  --primary: darksalmon;
  --dark: darkslategrey;
}
.bg-primary {
  background-color: var(--primary) !important;
}
.bg-dark {
  background-color: var(--dark) !important;
}
.d-flex {
  flex-flow: wrap;
}
.card {
    min-width: 22rem;
}
.material-icons.md-48 {
  font-size: 48px;
}
.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
.material-icons.md-light.md-inactive {
  color: rgba(255, 255, 255, 0.3);
}
@media screen and (max-width: 600px) {
  .d-flex {
    flex-direction: column;
  }
}
`;

module.exports = css;