"use client";
import { clearState, fetchUserDetails } from '@/lib/features/userSlice';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { PersonPin } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

export default function AccountDetails() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const store = useAppStore();
    const router = useRouter();
    const { author, isLoggedIn } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUserDetails())
    }, [])
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear()
        Cookies.remove("token")
        dispatch(clearState())
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
                    <PersonPin sx={{color:'black', fontSize:'40px'}} />
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
                    {isLoggedIn && <MenuItem onClick={handleClose}>{author.name}</MenuItem>}
                    {isLoggedIn && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
                    {!isLoggedIn && <MenuItem onClick={handleClose}>
                        <Link className='font-bold text-sm' href={'/login'} >Login</Link>
                    </MenuItem>
                    }
                </Menu>
            </div>
        </>
    )
}