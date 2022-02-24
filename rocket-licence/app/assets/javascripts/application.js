/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  let selectElement = document.querySelector('#launch-country')

  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    source: (query, populateResults) => {
      const options = selectElement.querySelectorAll('option')
      let results = []

      options.forEach(
        (opt, i, list) => {
          let queryRegExp = new RegExp(query.trim(), 'i')
          let value = opt.getAttribute('value')
          let text = opt.innerText.trim()
          if (queryRegExp.test(value) || queryRegExp.test(text)) {
            results.push(text)
          }
        }
      )

      populateResults(results)
    },
    selectElement: selectElement
  })
})
