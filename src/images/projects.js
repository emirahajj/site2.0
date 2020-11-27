import earworm from "./earworm.png"
import chess from "./bbchess.png"
import flix from "./flixter.png"
import cpp from "./c++.svg"
import ract from "./react.svg"
import tw from "./tw.png"
import sw from "./swift.svg"

const projects = [
  {
    title: 'Earworm',
    img: earworm,
    description: 'Using Python to scrape the Billboard End of Year 200 Charts, Earworm displays ' +
        'charts from 1970-2020 with genre analysis.',
    lang: ract
  }, {
    title: 'Flixter',
    img: flix,
    description: 'An iOS app utilizing the MoviesDB API to show users the currently playing movies' +
        ' across the country.',
        lang: sw
  }
  , {
    title: 'Baby Chess',
    img: chess,
    description: 'A simple command line chess game written in C++. First player to reach other end of the board' +
        ' wins.',
        lang: cpp
  }
]
export default projects;