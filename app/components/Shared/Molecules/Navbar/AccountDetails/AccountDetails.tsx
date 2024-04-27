"use client";
import { clearState, fetchUserDetails, updateState } from '@/lib/features/userSlice';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { PersonPin } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { configurations } from '@/config';
const { NEXT_APP_BASE_URL } = configurations;

export default function AccountDetails({sessionData}:any) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const store = useAppStore();
    const router = useRouter();
    const { author, isLoggedIn } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(sessionData) {
            localStorage.setItem("token", sessionData?.accessToken)
            dispatch(updateState({ author: sessionData?.data, isLoggedIn: true }))
            Cookies.set("token", sessionData?.accessToken, { expires: 30, path: '/' })
        }
        else {
            dispatch(fetchUserDetails())
        }
    }, [sessionData])
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async() => {
        localStorage.clear()
        Cookies.remove("token")
        dispatch(clearState())
        await signOut({ callbackUrl: `${NEXT_APP_BASE_URL}login` })
        router.push('/login')
        handleClose()
    }

    return (
        <>

            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonPin sx={{ color: 'black', fontSize: '40px' }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {isLoggedIn && <MenuItem onClick={handleClose}>
                        <Link href={'/author'} >{author?.name || sessionData?.data?.name}</Link>
                    </MenuItem>}
                    {isLoggedIn && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
                    {isLoggedIn && (author?.role === 'admin' || sessionData?.data?.role === 'admin') && <MenuItem >
                        <Link href={'/admin/dashboard'}>Dashboard</Link>
                    </MenuItem>}
                    {!isLoggedIn && <MenuItem onClick={handleClose}>
                        <Link className='font-bold text-sm' href={'/login'} >Login</Link>
                    </MenuItem>
                    }
                </Menu>
            </div>
        </>
    )
}