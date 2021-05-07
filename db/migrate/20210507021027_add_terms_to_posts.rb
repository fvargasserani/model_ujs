class AddTermsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :terms, :boolean
  end
end
