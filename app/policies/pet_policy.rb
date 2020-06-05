class PetPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    return true
  end

  def show?
    return true
  end

  def update?
    record.user == user
  end

  def destroy?
    record.user == user
  end

  def searched?
    return true
  end

  def lost_all?
    return true
  end

  def found_all?
    return true
  end
end
