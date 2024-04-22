import { OriginalSSOUser, SSOBCeIDUser, SSOGithubUser, SSOIdirUser, SSOUser } from '@/types';

export const mockIdirUser: SSOIdirUser = {
  idir_user_guid: 'idir123',
  idir_username: 'idirUser',
  given_name: 'John',
  family_name: 'Doe',
};

export const mockBCeIDUser: SSOBCeIDUser = {
  bceid_user_guid: 'bceid123',
  bceid_username: 'bceidUser',
  bceid_business_name: 'BCeID Business',
};

export const mockGithubUser: SSOGithubUser = {
  github_id: 'github123',
  github_username: 'githubUser',
  orgs: 'OpenSource',
  given_name: 'Jane',
  family_name: 'Smith',
  first_name: 'Jane',
  last_name: 'Smith',
};

export const mockOriginalSSOUserIDIR: OriginalSSOUser = {
  ...mockIdirUser,
  name: 'Composite User',
  preferred_username: 'compositeUser',
  email: 'composite@example.com',
  display_name: 'Composite User',
  client_roles: ['admin', 'user'],
  scope: 'full',
  identity_provider: 'idir',
};

export const mockSSOUserIDIR: SSOUser = {
  name: 'Composite User',
  preferred_username: 'compositeUser',
  email: 'composite@example.com',
  display_name: 'Composite User',
  client_roles: ['admin', 'user'],
  scope: 'full',
  identity_provider: 'idir',
  guid: 'idir123',
  username: 'idirUser',
  first_name: 'John',
  last_name: 'Doe',
  originalData: mockOriginalSSOUserIDIR,
};
