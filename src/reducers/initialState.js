import { loadState } from '../utils/localStorage'

export default {
    categories: loadState('categories') || {},
    locations: loadState('locations') || {}
}
