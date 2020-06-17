class AutocompleteSearchService
    include HTTParty
  
    def initialize(term)
      @term = term
    end
  
    def call
      { users: users }
    end
  
    private

    def users
    #   User.find_by_name(@term).map(&:first_name, &:last_name).take(5)
      User.find_by_name(@term).map(&:first_name, &:last_name).take(5)

    end
  end
  