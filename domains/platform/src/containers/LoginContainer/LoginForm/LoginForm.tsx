import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TOptions } from 'i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { BeatLoader } from 'react-spinners'

import * as z from 'zod'

// Packages
import { Input, PasswordInput } from '@ades/form'
import { P } from '@ades/typography'
import { HeroButton } from '@ades/ui'

// Styling
import { Layout } from './LoginForm.styled'

// Data
import { useAuthenticationContext } from '@/providers/authentication'
import { useLoginWithEmailMutation } from '@/data'

export function LoginForm() {
    const { t } = useTranslation()
    const { authorize } = useAuthenticationContext()
    const mutation = useLoginWithEmailMutation()
    const navigate = useNavigate()

    const schema = z.object({
        email: z
            .string({
                required_error: 'Email is required',
            })
            .email({ message: 'Please enter a valid email.' })
            .min(1),
        password: z
            .string({
                required_error: 'Password is required.',
            })
            .min(8, { message: 'Password must be at least 8 characters long.' }),
    })

    type Schema = z.infer<typeof schema>

    const { handleSubmit, register, formState, setError } = useForm<Schema>({
        reValidateMode: 'onChange',
        shouldFocusError: true,
        shouldUnregister: false,
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data: Schema) => {
        mutation.mutate(data, {
            onSuccess: async (res) => {
                authorize(res.data, () => setTimeout(() => navigate({ to: '/' }), 0))
            },
            onError: (err) => {
                setError('root.default', { message: err.response?.data?.data?.message })
            },
        })
    }

    return (
        <>
            {formState.errors.root?.default && (
                <Layout.Error>
                    <P size="S">
                        {t(formState.errors.root.default.message as string, { ns: 'common/errors' } as TOptions)}
                    </P>
                </Layout.Error>
            )}
            <Layout.Root onSubmit={handleSubmit(onSubmit)}>
                <Input
                    error={formState.errors.email?.message}
                    id="email"
                    label="Email"
                    placeholder="you@email.com"
                    {...register('email')}
                />

                <PasswordInput
                    error={formState.errors.password?.message}
                    id="password"
                    label="Password"
                    placeholder="*********"
                    {...register('password')}
                />

                <HeroButton type="submit">
                    {false ? <BeatLoader color="#fff" size="8px" speedMultiplier={0.5} /> : 'Register'}
                </HeroButton>
            </Layout.Root>
        </>
    )
}
