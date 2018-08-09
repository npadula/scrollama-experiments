import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

var typography = new Typography({
    baseFontSize: "24px",
    headerFontFamily: ["Droid Sans"],
    bodyFontFamily: ["Droid Serif"],
});

 WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif']
    }
  });


// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();
