import companies from './companies.json'

export default function appStore() {
  return {
    test: 'test',
    companies: companies.companies
  }
}
