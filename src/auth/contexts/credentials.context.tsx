import { createContext } from 'react';
import Credentials from '../interfaces/credentials';

const CredentialsContext = createContext<Credentials | null>(null);
export default CredentialsContext;
