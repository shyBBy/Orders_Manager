export const UnAuthenticatedApp = () => {
  const { user } = useAuth();
  
  return (
    <>
        <LoginScreen/>
    </>
    
    )
}