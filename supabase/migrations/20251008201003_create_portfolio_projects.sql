/*
  # Create Portfolio Projects Table

  1. New Tables
    - `portfolio_projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project title
      - `description` (text) - Detailed project description
      - `category` (text) - Project category (e.g., Data Analysis, Visualization, ML)
      - `technologies` (text array) - Technologies used
      - `image_url` (text) - Project thumbnail image URL
      - `demo_url` (text, optional) - Live demo link
      - `github_url` (text, optional) - GitHub repository link
      - `featured` (boolean) - Whether to feature this project
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `portfolio_projects` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated users to manage projects
*/

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  technologies text[] DEFAULT '{}',
  image_url text DEFAULT '',
  demo_url text,
  github_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view portfolio projects"
  ON portfolio_projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON portfolio_projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON portfolio_projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON portfolio_projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample projects
INSERT INTO portfolio_projects (title, description, category, technologies, image_url, featured, order_index) VALUES
(' PERSON IDENTIFICATION BASED ON TELUGU HANDWRITING USING CNN', 'The system proposed in this paper is the identification of person based on Telugu handwriting. Handwriting is the parameter used to identify the individual using Convolutional Neural Networks (CNN). The method proposed  has achieved good accuracy of 91% with the dataset taken.', 'Data Analysis', ARRAY['Python', 'CNN', 'Pandas', 'Keras' , 'Scikit-learn'], 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', true, 1),
('Sales Dashboard', 'Built an interactive sales dashboard tracking KPIs across multiple regions, providing real-time insights that reduced reporting time by 70%.', 'Visualization', ARRAY['Power BI', 'SQL', 'DAX'], 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', true, 2),
('Predictive Maintenance Model', 'Developed a machine learning model to predict equipment failures with 89% accuracy, reducing downtime costs by $2M annually.', 'Machine Learning', ARRAY['Python', 'TensorFlow', 'SQL'], 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', true, 3);
