--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact (
    id integer NOT NULL,
    nama character varying(200) NOT NULL,
    no_hp character varying,
    pesan text NOT NULL,
    createdat timestamp with time zone NOT NULL,
    updatedat timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.contact OWNER TO postgres;

--
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contact_id_seq OWNER TO postgres;

--
-- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;


--
-- Name: organisasi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.organisasi (
    id integer NOT NULL,
    user_id integer NOT NULL,
    organisasi character varying NOT NULL,
    createdat timestamp with time zone NOT NULL,
    updatedat timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    sebagai character varying
);


ALTER TABLE public.organisasi OWNER TO postgres;

--
-- Name: organisasi_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.organisasi_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.organisasi_id_seq OWNER TO postgres;

--
-- Name: organisasi_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.organisasi_id_seq OWNED BY public.organisasi.id;


--
-- Name: pendidikan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pendidikan (
    id integer NOT NULL,
    user_id integer NOT NULL,
    jenis character varying,
    nama_pendidikan character varying,
    "order" integer,
    createdat timestamp with time zone,
    updatedat timestamp with time zone
);


ALTER TABLE public.pendidikan OWNER TO postgres;

--
-- Name: pendidikan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pendidikan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pendidikan_id_seq OWNER TO postgres;

--
-- Name: pendidikan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pendidikan_id_seq OWNED BY public.pendidikan.id;


--
-- Name: pengalaman; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pengalaman (
    id integer NOT NULL,
    user_id integer NOT NULL,
    perusahaan character varying NOT NULL,
    sebagai character varying NOT NULL,
    keterangan character varying NOT NULL,
    createdat timestamp with time zone NOT NULL,
    updatedat timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.pengalaman OWNER TO postgres;

--
-- Name: pengalaman_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pengalaman_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pengalaman_id_seq OWNER TO postgres;

--
-- Name: pengalaman_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pengalaman_id_seq OWNED BY public.pengalaman.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    judul character varying(100) NOT NULL,
    deskripsi text,
    image text,
    active boolean NOT NULL,
    createdat timestamp with time zone NOT NULL,
    updatedat timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    password text NOT NULL,
    createdat timestamp with time zone NOT NULL,
    updatedat timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    nama character varying NOT NULL,
    alamat text,
    role character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: contact id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


--
-- Name: organisasi id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organisasi ALTER COLUMN id SET DEFAULT nextval('public.organisasi_id_seq'::regclass);


--
-- Name: pendidikan id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pendidikan ALTER COLUMN id SET DEFAULT nextval('public.pendidikan_id_seq'::regclass);


--
-- Name: pengalaman id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pengalaman ALTER COLUMN id SET DEFAULT nextval('public.pengalaman_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact (id, nama, no_hp, pesan, createdat, updatedat) FROM stdin;
1	Judul A 2	+62 123 457 798	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2	2023-10-22 04:22:55.48+08	2023-10-22 04:22:55.660113+08
2	Judul A 2	+62 123 457 798	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2	2023-10-22 19:48:39.302+08	2023-10-22 19:48:39.339057+08
3	Nick	+123 465 687	Heyyy from me!!!	2023-10-22 19:52:01.41+08	2023-10-22 19:52:01.441236+08
4	Joey	+890 678 567	whatss goodd	2023-10-22 19:53:44.276+08	2023-10-22 19:53:44.305882+08
5	John	+423 483729 4309	Message hereeee	2023-10-22 19:54:27.663+08	2023-10-22 19:54:27.688931+08
6	Doe	+123 123213	Message	2023-10-22 19:56:54.766+08	2023-10-22 19:56:54.794399+08
7	Doe 2	+234  234 3245 	Message	2023-10-22 19:57:35.759+08	2023-10-22 19:57:35.785858+08
\.


--
-- Data for Name: organisasi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organisasi (id, user_id, organisasi, createdat, updatedat, sebagai) FROM stdin;
20	19	Perkumpulan IT Indonesia	2023-10-22 04:00:18.029+08	2023-10-22 04:00:18.037182+08	Anggota tetap
21	19	Perkumpulan Programmer Indonesia	2023-10-22 04:00:18.029+08	2023-10-22 04:00:18.037182+08	Anggota inti
22	20	Perkumpulan IT Indonesia	2023-10-22 04:08:56.448+08	2023-10-22 04:08:56.454414+08	Anggota tetap
23	20	Perkumpulan Programmer Indonesia	2023-10-22 04:08:56.448+08	2023-10-22 04:08:56.454414+08	Anggota inti
\.


--
-- Data for Name: pendidikan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pendidikan (id, user_id, jenis, nama_pendidikan, "order", createdat, updatedat) FROM stdin;
40	19	sd	sdn 999	1	2023-10-22 04:00:18.029+08	\N
41	19	smp	smp 999	2	2023-10-22 04:00:18.029+08	\N
42	19	smk	smk 999	3	2023-10-22 04:00:18.029+08	\N
43	19	s1	S1 Manajemen Universitas 999	4	2023-10-22 04:00:18.029+08	\N
44	20	sd	sdn 777	1	2023-10-22 04:08:56.448+08	\N
45	20	smp	smp 777	2	2023-10-22 04:08:56.448+08	\N
46	20	smk	smk 777	3	2023-10-22 04:08:56.448+08	\N
47	20	s1	S1 Informatika Universitas 777	4	2023-10-22 04:08:56.448+08	\N
\.


--
-- Data for Name: pengalaman; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pengalaman (id, user_id, perusahaan, sebagai, keterangan, createdat, updatedat) FROM stdin;
2	19	Code ID	Frontend Developer	Membuat website menggunakan ReactJS	2023-10-22 04:00:18.029+08	2023-10-22 04:00:18.039396+08
3	19	Code X	Backend Developer	Membuat website menggunakan ExpressJS	2023-10-22 04:00:18.029+08	2023-10-22 04:00:18.039396+08
4	20	Code ID	Javascript Developer	Membuat website menggunakan Javascript	2023-10-22 04:08:56.448+08	2023-10-22 04:08:56.456581+08
5	20	Code X	PHP Developer	Membuat website menggunakan PHP	2023-10-22 04:08:56.448+08	2023-10-22 04:08:56.456581+08
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, user_id, judul, deskripsi, image, active, createdat, updatedat) FROM stdin;
26	19	Judul A 26 edited	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2 edited	https://via.placeholder.com/300	t	2023-10-22 18:16:11.402+08	2023-10-22 18:16:11.405129+08
24	19	Judul A 3	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2	https://via.placeholder.com/100	t	2023-10-22 18:16:10.646+08	2023-10-22 18:16:10.646907+08
27	19	Judul redix 2	Deskripsi	https://via.placeholder.com/100	t	2023-10-22 18:44:09.66+08	2023-10-22 18:44:09.661872+08
28	19	Judul redux 2	Deskripsi	https://via.placeholder.com/100	t	2023-10-22 22:26:54.432+08	2023-10-22 22:26:54.438181+08
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, createdat, updatedat, nama, alamat, role) FROM stdin;
20	admin	$2b$10$IGMaIcRhibF5a2Zf73Ku.eCSTZCffrWwfZ6ZwVxU60x4jYbkJ9zsW	2023-10-22 04:08:56.416+08	2023-10-22 04:08:56.446578+08	Admin Doe	Jl. Alamat admin no. 999	admin
19	member	$2b$10$I2NKNyuTe4yEGc.OIXYgeecIxlGZgAKIvWK3Dw6HiNbUKmRJ9Wqo6	2023-10-22 04:00:17.941+08	2023-10-22 04:00:18.023757+08	John Doe	Jl. Alamat member no. 999	member
\.


--
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_id_seq', 7, true);


--
-- Name: organisasi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organisasi_id_seq', 23, true);


--
-- Name: pendidikan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pendidikan_id_seq', 47, true);


--
-- Name: pengalaman_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pengalaman_id_seq', 5, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 31, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: contact contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- Name: organisasi organisasi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organisasi
    ADD CONSTRAINT organisasi_pkey PRIMARY KEY (id);


--
-- Name: pendidikan pendidikan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pendidikan
    ADD CONSTRAINT pendidikan_pkey PRIMARY KEY (id);


--
-- Name: pengalaman pengalaman_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pengalaman
    ADD CONSTRAINT pengalaman_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: posts post_user_fket; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_user_fket FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;


--
-- Name: organisasi relation_organisasi_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organisasi
    ADD CONSTRAINT relation_organisasi_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE NOT VALID;


--
-- Name: pendidikan relation_pendidikan_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pendidikan
    ADD CONSTRAINT relation_pendidikan_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE NOT VALID;


--
-- Name: pengalaman relation_pengalaman_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pengalaman
    ADD CONSTRAINT relation_pengalaman_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE NOT VALID;


--
-- PostgreSQL database dump complete
--

