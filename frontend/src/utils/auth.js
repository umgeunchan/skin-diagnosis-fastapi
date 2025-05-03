export const logout = () => {
    localStorage.removeItem('user');      // 로그인 시 저장한 키에 맞게 조정
    localStorage.removeItem('token');     // 예: 토큰도 있다면 삭제
  };
  