import moment from 'moment'

export default {
  loadData(state, payload) {
    const sections = []
    let currentDate = null
    let currentPos = -1
    const readingIds = Object.keys(payload)
    for (let i = 0; i < readingIds.length; i++) {
      const readingData = payload[readingIds[i]]
      const momentDate = moment(parseInt(readingData.timestamp, 10))
      let thisDate = null;
      if (momentDate.calendar().includes('Today')) {
        thisDate = 'Today'
      } else if (momentDate.format('YYYY') === moment().format('YYYY')) {
        thisDate = momentDate.format('MMM D')
      } else {
        thisDate = momentDate.format('MMM D YYYY')
      }
      if (currentDate === thisDate) {
        sections[currentPos].items.push(readingData)
      } else {
        currentPos++
        currentDate = thisDate
        sections.push({
          day: thisDate,
          items: [
            readingData
          ]
        })
      }
    }
    const newState = state
    newState.sections = sections
  }
}
