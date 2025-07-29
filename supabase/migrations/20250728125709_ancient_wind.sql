/*
  # Create contact table

  1. New Tables
    - `contact`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact` table
    - Add policy for inserting contact messages (public access)
    - Add policy for reading contact messages (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages
CREATE POLICY "Anyone can insert contact messages"
  ON contact
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read contact messages (for admin purposes)
CREATE POLICY "Authenticated users can read contact messages"
  ON contact
  FOR SELECT
  TO authenticated
  USING (true);