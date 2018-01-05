import { expect } from 'chai'
import titles from './titles'
import * as actionTypes from '../constants/actionTypes'

describe('titles resucer', () => {
  const id = 550

  it('should return initial state', () => {
    expect(titles(undefined, {})).to.eql({})
  })

  it('should handle REQUEST_TITLE_DATA', () => {
    expect(titles(undefined, { type: actionTypes.REQUEST_TITLE_DATA, id })).to.eql({
      [id]: {
        isFetching: true,
      },
    })
  })

  it('should handle RECIEVE_TITLE_DATA', () => {
    expect(
      titles(
        {
          [id]: {
            isFetching: true,
          },
        },
        {
          type: actionTypes.RECIEVE_TITLE_DATA,
          id: id,
          details: { test: 'test' },
          videos: [{ test: 'test' }],
        }
      )
    ).to.eql({
      [id]: {
        test: 'test',
        isFetching: false,
        videos: [{ test: 'test' }],
      },
    })
  })
})
