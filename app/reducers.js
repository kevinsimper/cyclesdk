import companies from './companies.json'
import countries from './countries.json'

export default function appStore() {
  return {
    countries: countries.countries,
    companies: companies.companies
  }
}
