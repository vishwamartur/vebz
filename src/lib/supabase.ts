import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
};

export type Booking = {
  id: string;
  user_id: string;
  service: string;
  date: string;
  time: string;
  price: number;
  status: 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
};

export async function getProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function updateProfile(profile: Partial<Profile>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', user.id)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function getUserBookings() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: true });

  if (error) throw error;
  return data as Booking[];
}

export async function createBooking(booking: Omit<Booking, 'id' | 'user_id' | 'created_at' | 'updated_at'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ...booking, user_id: user.id }])
    .select()
    .single();

  if (error) throw error;
  return data as Booking;
}